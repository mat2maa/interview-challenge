/* eslint-disable import/prefer-default-export */

export const addToMenu = (
  {
    state,
    setState,
  },
  item,
) => {

  const {
    menu,
    dietaries,
  } = state;

  if (menu.includes(item)) return;

  const newMenu = [
    ...menu,
    item,
  ];

  const { dietaries: itemDietaries } = item;
  const newDietaries = { ...dietaries };

  if (itemDietaries.length) {

    itemDietaries.forEach(d => {

      if (!dietaries.hasOwnProperty(d)) {

        newDietaries[d] = 1;
        return;
      }

      newDietaries[d] += 1;
    });
  }

  setState({
    menu: newMenu,
    menuCount: newMenu.length,
    dietaries: newDietaries,
  });
};

export const removeFromMenu = (
  {
    state,
    setState,
  },
  item,
) => {

  const {
    menu,
    dietaries,
  } = state;

  const newMenu = [...menu].filter(menuItem => menuItem !== item);

  const { dietaries: itemDietaries } = item;
  const newDietaries = { ...dietaries };

  if (itemDietaries.length) {

    itemDietaries.forEach(d => {

      if (!dietaries.hasOwnProperty(d)) {

        newDietaries[d] = 0;
        return;
      }

      newDietaries[d] -= 1;
    });
  }

  setState({
    menu: newMenu,
    menuCount: newMenu.length,
    dietaries: newDietaries,
  });
};

