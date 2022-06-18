import { render, screen } from '@testing-library/react';
import App from './App';
import SongInfo from './Components/SongInfo'
// import OtherTracks from './Components/OtherTracks'

test('renders "Tom" somewhere on the pages', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tom/i);
  expect(linkElement).toBeInTheDocument();
});

describe('album', () => {
  test('theres an album cover', () => {
    render(<SongInfo/>);
    const albumcover = screen.getByRole('img');
    expect(albumcover).toHaveAttribute('src', 'album.jpg');
    expect(albumcover).toHaveAttribute('alt', 'album');
  });
});

// jest.mock("check the 'other track' Component loads", () => () => {
//   const OtherTracks = "OtherTracks";
//   return <OtherTracks />;
// });


//check the btn works

//check link exists

//
