import React from 'react';
import { render } from "@testing-library/react-native"
import Favorites from '.';

describe("Favorites Screen Test", () => {
  // beforeEach(() => {
 
  // })

  it('should render the favorites list', () =>{
    const favoritesScreen = render(
      <Favorites />
    )
  })
})