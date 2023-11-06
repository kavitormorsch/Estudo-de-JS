const names = ['Kauê', 'Victória', 'Samuel', 'Kaio', 'João'];

//names.splice(indíce, quantos elementos para remover, el1, el2, el3); el1,2,3 são elementos que são adicionados
//numeros negativos são o contrário do array, postivos = [0, 1, 2 , 3]
//                                            negativos = [-4, -3 -2, -1] o elemento -1 é o elemento 3, -2 é o 2, etc.
//é possível não apagar nenhum elemento com o 0, assim posibilitando apenas a adição de um elemento no array no indíce que foi passado, empurrando o valor anterior para a direita
//com o splice pode-se adicionar um elemento em um indíce que não exista, contanto que seja logicamente o próximo indíce que deveria existir
const removed = names.splice(4, 2, 'Ronin', 'Luiz'); //Number.Max_value é o maior valor que o javascript pode chegar, nesse caso ele serve para pegar o maior número de elementos do array que é possível baseado no indíce de início
console.log(names);
console.log(removed);