// import React from 'react';

// /**
//  * Combines multiple functional components into a single functional component.
//  * @param  {...React.FC} components An array of functional components.
//  * @returns {React.FC} A new functional component combining all provided components.
//  */
// export const combineComponents = (...components) => {
//   return components.reduce(
//     (AccumulatedComponents, CurrentComponent) => {
//       const CombinedComponent = ({ children }) => (
//         <AccumulatedComponents>
//           <CurrentComponent>{children}</CurrentComponent>
//         </AccumulatedComponents>
//       );

//       // Assign a displayName for better debugging
//       CombinedComponent.displayName = `Combined(${AccumulatedComponents.displayName || AccumulatedComponents.name || 'Anonymous'}, ${CurrentComponent.displayName || CurrentComponent.name || 'Anonymous'})`;

//       return CombinedComponent;
//     },
//     ({ children }) => <>{children}</>,
//   );
// };


