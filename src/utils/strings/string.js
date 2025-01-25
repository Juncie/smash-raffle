import React from 'react';

/**
 *
 *
 * @name titleCase
 * @description Returns string with first letter capatalized
 * @param {String} string  Transformed string
 * @returns {String}
 */
export const titleCase = (string) => {
    return string?.[0]?.toUpperCase?.() + string?.slice?.(1);
};
/**
 *
 *
 * @name parseHtmlJson
 * @description Returns JSX for dangerouslySetInnerHTML Prop
 * @param {String} string  { __html: string };
 * @returns {JSX}
 */
export const parseHtmlJson = (htmlJson) => {
    return { __html: htmlJson };
};
/**
 *
 *
 * @name RenderHtmlJson
 * @description Returns JSX for dangerouslySetInnerHTML Prop
 * @param {String} string  <div {...props} dangerouslySetInnerHTML={{ __html: json }} />
 * @returns {JSX}
 */
export const RenderHtmlJson = ({ json, ...props }) => {
    const regex = /(<([^>]+)>)/gi;
    const removeHtmlJson = json.replace(regex, '');
    return <div {...props} dangerouslySetInnerHTML={{ __html: removeHtmlJson }} />;
};
/**
 *
 *
 * @name getExcerpt
 * @description Returns an excerpt from a longer string
 * @param {String} content      Longer block of content
 * @param {Number} approxLength Number of characters desired, approximately
 * @returns {String}
 */
export const getExcerpt = (content, approxLength, ellipsis) => {
    if (content.length <= approxLength) {
        return content;
    }
    // Split content by words
    const contentArray = content.substr(0, approxLength).split(' ');
    // Set the last "word" in the array to an ellipsis
    if (!ellipsis) {
        return contentArray.join(' ');
    }
    contentArray[contentArray.length - 1] = '...';
    return contentArray.join(' ');
};

/**
 *
 *
 * @name noSpaceBetween
 * @description Trims whitespace in a string for URL encoding
 * @param {String} string     A single string with white space.
 * @returns {String}
 */
export const noSpaceBetween = (str) => {
    if (/\s/.test(str)) {
        return str.replace(/\s/g, '');
    }
    return str.toLowerCase();
};

/**
 *
 *
 * @name trimSpaces
 * @description Trims spaces in strings
 * @param {*} str Item to trim space
 * @returns String
 */
export const trimSpaces = (str) => {
    str = str.replace(/\s/g, '');
    return str;
};
