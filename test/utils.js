/**
 * Utility library for iv tests
 * Created by b-laporte on 01/04/16.
 * Copyright Bertrand Laporte 2016
 */

import {NacNodeType} from '../src/iv/nac';

/**
 * Recursively compare 2 NAC trees
 * @param nac1 the first nac tree
 * @param nac2 the second nac tree
 * @returns {string} null if ok, or a string describing the error
 */
export function compare(nac1, nac2) {
    if (!nac1 || !nac2) {
        return "Compare arguments cannot be null";
    }
    var n1 = nac1.firstSibling, n2 = nac2.firstSibling;
    try {
        while (n1 || n2) {
            compareNodes(n1, n2);
            n1 = n1.nextSibling;
            n2 = n2.nextSibling;
            if ((n1 && !n2) || (!n1 && n2)) {
                //noinspection ExceptionCaughtLocallyJS
                throw "Different number of root nodes";
            }
        }
    } catch (ex) {
        return ex;
    }

    return '';
}

function compareNodes(n1, n2) {
    if (!n1 && !n2) {
        return;
    }
    if (!n1 && n2) {
        throw "Node1 not found: " + n2.nodeName;
    }
    if (n1 && !n2) {
        throw "Node2 not found: " + n1.nodeName;
    }
    if (n1.nodeType !== n2.nodeType) {
        throw "Different node types found: " + n1.nodeType + " vs. " + n2.nodeType + " for " + n1.nodeName + " node";
    }
    if (n1.nodeValue !== n2.nodeValue) {
        if (n1.nodeValue && n1.nodeValue.startBlockExpression) {
            var a = n1.nodeValue.startBlockExpression, b = n2.nodeValue.startBlockExpression;
            if (a !== b) {
                throw "Different JS start block expression found: \n" + a + "\n" + b;
            }
            a = n1.nodeValue.endBlockExpression;
            b = n2.nodeValue.endBlockExpression;
            if (a !== b) {
                throw "Different JS end block expression found: '" + a + "' vs '" + b + "'";
            }
        } else {
            throw "Different node values found: " + n1.nodeValue + " vs. " + n2.nodeValue;
        }
    }
    if (n1.nodeType === NacNodeType.ELEMENT && n1.nodeName !== n2.nodeName) {
        throw "Different node names found: " + n1.nodeName + " vs. " + n2.nodeName;
    }
    if (n1.firstChild || n2.firstChild) {
        // compare children
        var nd1 = n1.firstChild, nd2 = n2.firstChild;
        while (nd1 || nd2) {
            compareNodes(nd1, nd2);
            nd1 = nd1.nextSibling;
            nd2 = nd2.nextSibling;
            if ((nd1 && !nd2) || (!nd1 && nd2)) {
                throw "Different number of child nodes in " + n1.nodeName;
            }
        }
    }
    // compare attributes
    var att1 = n1.firstAttribute, att2 = n2.firstAttribute;
    while (att1 || att2) {
        if (!att1) {
            throw "Missing attribute in first node: " + att2.name;
        }
        if (!att2) {
            throw "Missing attribute in second node: " + att1.name;
        }
        checkProperty("name", att1, att2);
        checkProperty("value", att1, att2);
        checkProperty("nature", att1, att2);
        checkProperty("typeRef", att1, att2);

        att1 = att1.nextSibling;
        att2 = att2.nextSibling;
    }
}

function checkProperty(name, att1, att2) {
    if (att1[name] !== att2[name]) {
        throw "Different attribute "+name+": " + att1[name] + " vs " + att2[name];
    }
}