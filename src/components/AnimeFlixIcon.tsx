import Image from 'next/image'

export interface AnimeFlixProps {
  className:string
}

const AnimeFlixIcon: React.FC<AnimeFlixProps> = () => (
   <Image
      src="https://www.linkpicture.com/q/1585311326229.png"
      alt="Logo"
      width={150}
      height={150}
    />
);

export default AnimeFlixIcon;
