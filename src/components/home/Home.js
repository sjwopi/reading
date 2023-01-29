import Favorites from './Favourites';
export default function Home() {
  function onCardOpen(card) {
    console.log(card);
  }
  return <Favorites onCardOpen={onCardOpen} />;
}
