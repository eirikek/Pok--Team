import '../styles/teampage.css';
import { Favorites } from '../components/Favorites.tsx';
import { usePokemonContext } from '../context/usePokemonContext.ts';

export function TeamPage() {
  const { favoritePokemons, toggleFavorite, isFavorited } = usePokemonContext();

  return (
    <main className="team-page">
      <Favorites pokemons={favoritePokemons} onToggleFavorite={toggleFavorite} isFavorited={isFavorited} />
    </main>
  );
}
