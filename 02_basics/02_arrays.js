const marvel_heros = ["thor","IronMan","SpiderMan"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros)
const all_new_heros = [...marvel_heros,...dc_heros] //spread out
marvel_heros.concat(dc_heros);
console.log(marvel_heros)
console.log(all_new_heros)
