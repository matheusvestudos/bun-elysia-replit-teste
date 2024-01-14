/** 
  Essa função retorna um numero aleatorio
 */
export function random() {
  const result = Math.random() * 100000
  return Math.round(result)
}