import ImgTest from '../assets/35012cebc73b17d381928ce69f670318.jpg';

export default function Header() {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '200px',
          overflow: 'hidden',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
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
