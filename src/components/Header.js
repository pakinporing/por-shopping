import ImgTest from '../assets/35012cebc73b17d381928ce69f670318.jpg';

export default function Header() {
  return (
    <>
      <div className="w-[full] h-[200px] overflow-hidden flex items-center justify-center">
        <img
          src={ImgTest}
          style={{
            overflow: 'hidden'
          }}
        />
      </div>
    </>
  );
}
