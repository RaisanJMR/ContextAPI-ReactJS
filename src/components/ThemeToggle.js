import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';




function ThemeToggle() {
  const {toggleTheme} = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default ThemeToggle


// export class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { toggleTheme } = this.context;
//     return <button onClick={toggleTheme}>Toggle Theme</button>;
//   }
// }

// export default ThemeToggle;