export const Header = () => (
  <header className="mt-8 flex flex-col items-center">
    <span>
      <svg width="167" height="35" viewBox="0 0 167 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Chromecast Cast Library for the browser</title>
        <path d="M13.2 24.36H38.12V35H8.24C3.68 35 0 31.32 0 26.76V8.28001C0 3.72001 3.68 0.0400085 8.24 0.0400085H37.68V10.68H13.2V24.36Z" fill="white" />
        <path d="M60.3572 19.6H66.3572L63.3572 13.6L60.3572 19.6ZM74.0372 35L71.3172 29.6H55.3572L52.6772 35H38.3972L55.8372 0H70.1172L70.8772 0.0400019L88.3172 35H74.0372Z" fill="white" />
        <path d="M129.938 6.00001V11.96H105.778L121.218 17.6C126.378 19.68 129.938 21.48 129.938 26.32V28.6V29.04C129.938 32.36 127.258 35 123.978 35H96.8584C93.5384 35 90.8984 32.36 90.8984 29.04V23.08H114.698L99.5784 17.6C94.4184 15.48 90.8984 13.68 90.8984 8.88001V6.56001V6.60001C90.8984 6.40001 90.8984 6.20001 90.8984 6.00001C90.8984 2.68001 93.5384 0.0400085 96.8584 0.0400085H123.978C127.258 0.0400085 129.938 2.68001 129.938 6.00001Z" fill="white" />
        <path d="M166.912 0.0799866V12.44H155.632V35H143.272V12.44H131.992V0.0799866H166.912Z" fill="white" />
      </svg>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
            span {
              padding: 0rem 0.5rem 0.5rem 0;
              mask-image: linear-gradient(
                60deg,
                black 25%,
                rgba(0, 0, 0, 0.2) 50%,
                black 75%
              );
              mask-size: 400%;
              mask-position: 0%;
            }
            span:hover {
              mask-position: 100%;
              transition: mask-position 1s ease, -webkit-mask-position 1s ease;
            }
          `}</style>
    </span>

    <p className="mb-6 mt-3 text-center text-lg text-gray-500 md:!text-xl">
      Chromecast Library for the browser
    </p>

    <div className="flex flex-wrap justify-center gap-2">
      <a
        aria-label="Version"
        href="https://www.npmjs.com/package/@jdion/cast"
        className="h-5"
      >
        <img
          alt="cast-version"
          src="https://img.shields.io/npm/v/@jdion/cast?colorA=2B323B&colorB=1e2329&style=flat&label=Version"
        />
      </a>

      <a
        aria-label="License"
        href="https://www.npmjs.com/package/@jdion/cast"
        className="h-5"
      >
        <img
          alt="cast-license"
          src="https://img.shields.io/github/license/jonathandion/mono?colorA=2B323B&colorB=1e2329&style=flat&label=License"
        />
      </a>
    </div>
  </header>
)
