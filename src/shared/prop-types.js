// Types complexes de propriétés React
// ===================================

import { and, between, integer, nonNegativeInteger } from 'airbnb-prop-types'
import { arrayOf, bool, func, node, oneOfType, shape, string } from 'prop-types'

// Les composants React peuvent déclarer
// [le type et la structure des propriétés](http://facebook.github.io/react/docs/reusable-components.html)
// qui leur sont passées,
// pour bénéficier d’une aide à la validation affichée
// généralement sous forme d’erreurs dans la console du
// navigateur.
//
// Outre les types prédéfinis, il est possible de déclarer
// des types complexes, avec des objets, des tableaux, etc.
// Lorsqu'ils sont répétés à travers le code, autant les
// centraliser, comme ici.

// On ré-exporte ici tous les types externes exploités par l’application, comme ça le reste
// du code de l’appli n’a pas à se soucier de l’origine des validateurs
// (classiques, Airbnb, ou nous) : il importe depuis ce module à tous les coups.
export {
  arrayOf,
  bool,
  func,
  node,
  nonNegativeInteger,
  oneOfType,
  shape,
  string,
}

// Validateur d’entier positif non nul (ex. valeurs d’objectifs).
// Airbnb fournit `nonNegativeInteger`, mais pas la version sans le zéro…
export const positiveInteger = and([integer(), between({ gt: 0 })])
