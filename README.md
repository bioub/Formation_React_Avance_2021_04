# Exercices

## Rappels React / Redux

Exercice 1 - Suppression

Créer un action creator et une constante pour emettre
une action `TODO_DELETE` (sur le modèle de `todoChange`)

Dans `TodoListContainer` ajouter un `mapDispatchToProps`
(sur le modèle de `TodoFormContainer`) qui fera le dispatch
de `TODO_DELETE` en

Editer le reducer `itemsReducer` pour supprimer la todo du tableau
(en retournant un nouveau tableau) quand l'action `TODO_DELETE`
se produit (vous pouvez utiliser la méthode `.filter` du type Array pour retourner un nouveau tableau sans l'élément à supprimer).

Exercice 2 - Cocher/décocher

Ajouter une case à cocher dans `TodoItem` qui affichera la valeur
contenue dans `todo.completed`. Sur l'événement change
remonter au parent en passant par une props `onTodoChecked`

Pour mettre à jour le state quand une checkbox est cochée, reproduire les étapes de l'exercice 1 :
- action creator
- mapDispatchToProps
- reducer
