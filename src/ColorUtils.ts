import { isNumberInRange } from "./MathUtils";

/**
 * 颜色字符串 rgb 转 16 进制
 * @param color rgb 或者 rgba 格式的颜色字符串
 * @param alpha 输出透明度
 * @returns
 */
export function rgb2hex(color = "", alpha = 255): void | string {
  let transformed = "";
  if (!/^rgba?\([\d,\s.]+\)$/i.test(color)) {
    throw new Error("The color format entered is incorrect.");
  }
  const colorNumbers = /\d+(\.\d+)/gm.exec(color)?.map((n, i) => {
    const number = Number(n);
    if (i > 3 || isNaN(number) || !isNumberInRange(number, 0, 255, true)) {
      throw new Error("The color has invalid value.");
    }
    return number;
  });
  if (colorNumbers) {
    transformed = colorNumbers
      .map((number, i) => {
        // alpha
        if (i === 3) {
          if (isNumberInRange(number, 0, 1, true)) {
            alpha = number * 255;
          } else {
            alpha = number || alpha;
          }
          return "";
        }
        return number.toString(16);
      })
      .join("");
    if (isNumberInRange(alpha, 0, 255, true) && alpha < 255) {
      transformed += alpha.toString(16);
    }
  }
  return transformed;
}

/**
 * 颜色字符串 16 进制转 rgb
 * @param color 16 进制颜色字符串
 * @param alpha 输出透明度
 * @returns
 */
export function hex2rgb(color = "", alpha = 1): void | string {
  if (/^#[0-9a-fA-F]$/i.test(color)) {
    throw new Error("The color format entered is incorrect.");
  }
  let r,
    g,
    b,
    a = alpha;
  if (color.length === 4) {
    r = Math.pow(parseInt(color[1], 16), 2);
    g = Math.pow(parseInt(color[2], 16), 2);
    b = Math.pow(parseInt(color[3], 16), 2);
  } else {
    r = parseInt(color.slice(1, 3), 16);
    g = parseInt(color.slice(3, 5), 16);
    b = parseInt(color.slice(5, 7), 16);
    a = parseInt(color.slice(7, 9), 16) / 255 || alpha;
  }
  [r, g, b, a].forEach((number) => {
    if (!isNumberInRange(number, 0, 255, true)) {
      throw new Error("The color has invalid value.");
    }
  });
  const fns = !a || isNumberInRange(a, 0, 1) ? "rgba(" : "rgb(";
  const fne = !a || isNumberInRange(a, 0, 1) ? `, ${a?.toFixed(3)})` : ")";
  return `${fns}${r}, ${g}, ${b}${fne}`;
}

export const ColorUtils = {
  rgb2hex,
  hex2rgb,
};
