export default function sortList(arr) {
  return arr.slice().sort((a, b) => b.health - a.health);
}
