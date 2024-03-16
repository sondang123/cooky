// Util functions
import { sha256 } from "js-sha256";
import _ from "lodash";
import moment from "moment";
import "moment/locale/vi";
import Global from "./Global";
moment.locale("vi");

const Utils = {
  // sha256
  sha256: (text) => {
    return sha256(text);
  },
  zeroPad: (num, places) => String(num).padStart(places, "0"),
  // Check object empty
  isObjectEmpty: (obj) => {
    return (
      Utils.isObjectNull(obj) ||
      (Object.keys(obj).length === 0 && obj.constructor === Object)
    );
  },

  // Get full url
  getFullUrl: (url) => {
    if (url && !url.startsWith("http") && !url.startsWith("blob")) {
      // console.log(`${process.env.REACT_APP_BASE_URL}${encodeURI(url)}`);
      return `${process.env.REACT_APP_BASE_URL}${encodeURI(url)}`;
    }
    // console.log(encodeURI(url));
    return encodeURI(url);
  },

  // Check is full url
  checkFullUrl: (url) => {
    if (url && url.startsWith("http")) {
      return true;
    }
    return false;
  },

  // split array
  chunkItems: (items, chunkSize) => {
    let arrRet = [];
    if (items && _.isArray(items)) {
      for (let i = 0; i < items.length; i += chunkSize) {
        const chunk = items.slice(i, i + chunkSize);
        arrRet.push(chunk);
      }
    }
    return arrRet;
  },

  // Check object null|undefine
  isObjectNull: (obj) => {
    return obj === null || obj === undefined || obj === "NULL";
  },

  // convert first character of string to uppercase
  convertFirstCharacterToUppercase: (stringToConvert) => {
    var firstCharacter = stringToConvert.substring(0, 1);
    var restString = stringToConvert.substring(1);
    return firstCharacter.toUpperCase() + restString;
  },

  // format number
  formatNumber: (iNumber) => {
    return new Intl.NumberFormat("de-DE").format(iNumber);
  },

  // format date time
  formatDateTime: (sDateTime, sFormat = "DD/MM/YYYY HH:mm", utc = false) => {
    if (utc) {
      return moment(sDateTime).utc().format(sFormat);
    }
    return moment(sDateTime).local().format(sFormat);
  },

  // get time ago
  timeAgo: (sDateTime) => {
    const momentTime = moment.utc(sDateTime);
    return momentTime.fromNow();
  },

  // Change empty to null
  formatEmptyKey: (items) => {
    for (const [key, value] of Object.entries(items)) {
      if (value === "" || value === undefined) {
        items[key] = null;
      }
    }
  },

  // remove null key
  removeNullKey: (items) => {
    for (const [key, value] of Object.entries(items)) {
      if (_.isNull(value)) {
        delete items[key];
      }
    }
  },

  // Delete null
  formatNullKey: (items) => {
    for (const [key, value] of Object.entries(items)) {
      if (_.isNull(value)) {
        delete items[key];
      }
    }
  },

  // check pagination
  getNextPage: (pagination) => {
    const { total, count, currentPage } = pagination;

    const hasMorePage = currentPage * Global.gDefaultPagination < total;
    if (hasMorePage) {
      return currentPage + 1;
    }

    return null;
  },

  // get current url
  getCurrentUrl: () => {
    return window.location.href;
  },

  // get last array item
  getLastItem: (items) => {
    if (items && Array.isArray(items) && items.length > 0) {
      return items[items.length - 1];
    }
    return null;
  },

  // scroll div to bottom
  scrollToBottom: (id) => {
    var div = document.getElementById(id);
    if (div) {
      div.scrollTop = div.scrollHeight - div.clientHeight;
    }
  },

  // Decode html
  decodeHTML: (html) => {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = html;
    return textArea.value;
  },

  // open link in new tab
  openInNewTab: (url) => {
    window.open(url, "_blank").focus();
  },

  // open link in current tab
  openInCurrentTab: (url) => {
    window.open(url);
  },

  /**
   * Convert file size to MB
   * @param {number} sizeInBytes File size in bytes
   * @returns
   */
  fileSizeInMB: (sizeInBytes) => {
    const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
    return sizeInMB;
  },

  lockedBodyScroll: () => {
    document.body.classList.add("saymee-overflow-hidden");
  },

  unlockedBodyScroll: () => {
    document.body.classList.remove("saymee-overflow-hidden");
  },

  copyTextToClipboard: (text, callback) => {
    navigator.clipboard.writeText(text);
    if (_.isFunction(callback)) {
      callback();
    }
  },
  parseCurrency: (price) => {
    let str = String(price);
    let out = "";
    let sub = "";
    while (str.slice(-3).length == 3) {
      sub = str.slice(-3);

      str = str.slice(0, str.length - 3);
      if (str.length > 0) {
        out = `.${sub}${out}`;
      } else {
        out = `${sub}${out}`;
      }
    }
    if (str.length > 0) {
      out = str + out;
    }
    return out + "đ";
  },
};

export default Utils;
