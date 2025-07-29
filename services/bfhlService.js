exports.processInput = (data) => {
  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let alphaConcat = "";

  data.forEach((item) => {
    if (/^-?\d+$/.test(item)) {
      const num = parseInt(item, 10);
      sum += num;
      if (num % 2 === 0) even_numbers.push(item);
      else odd_numbers.push(item);
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      alphaConcat += item;
    } else {
      special_characters.push(item);
    }
  });

  const reversedAlpha = alphaConcat.split("").reverse();
  const concat_string = reversedAlpha
    .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

  return {
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  };
};