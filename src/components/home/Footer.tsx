import Link from 'next/link';

const Footer = () => {
  return (
    <div className="relative flex w-full flex-col Footer_dl">
      <div className="grid grid-cols-2 gap-5 font-space">
        <div className="flex max-w-xs flex-col justify-between p-5 text-gray-200 footer" id="foot1">
          <a aria-label="Solana" href="https://www.solana.com" rel="noopener noreferrer" target="_blank">
          <svg width="31" height="27" viewBox="0 0 31 27" fill="none"><path d="m30.179 21.3-5.008 5.332a1.143 1.143 0 0 1-.848.368H.583a.59.59 0 0 1-.535-.348.568.568 0 0 1-.04-.328.593.593 0 0 1 .148-.298l5.002-5.332a1.141 1.141 0 0 1 .848-.368h23.74a.574.574 0 0 1 .43.971l.003.003ZM25.17 10.56a1.192 1.192 0 0 0-.848-.368H.583a.59.59 0 0 0-.535.349.569.569 0 0 0-.04.328c.02.112.071.213.148.297l5.002 5.335c.107.115.24.208.384.27.147.064.303.095.464.098h23.74a.574.574 0 0 0 .529-.348.569.569 0 0 0-.108-.623l-5-5.335.003-.003ZM.582 6.73h23.74a1.2 1.2 0 0 0 .464-.096c.147-.064.277-.154.384-.272L30.18 1.03a.579.579 0 0 0-.107-.881.571.571 0 0 0-.323-.09H6.006c-.158 0-.317.034-.464.095a1.126 1.126 0 0 0-.384.273L.156 5.759a.582.582 0 0 0-.108.625.59.59 0 0 0 .534.348V6.73Z" fill="url(#solana-gradient)"></path>
          <defs><linearGradient id="solana-gradient" x1="2.561" y1="27.642" x2="27.258" y2="-.397" gradientUnits="userSpaceOnUse"><stop offset=".08" stop-color="#9945FF"></stop>
          <stop offset=".3" stop-color="#8752F3"></stop><stop offset=".5" stop-color="#5497D5"></stop><stop offset=".6" stop-color="#43B4CA"></stop>
          <stop offset=".72" stop-color="#28E0B9"></stop><stop offset=".97" stop-color="#19FB9B"></stop></linearGradient></defs></svg><span id="sollo">SOLANA</span>
          </a>
          <p className="footp">Made possible on the Solana network</p>
       </div>
       <div className="text-gray-200 footer" id="foot2">
        <a aria-label="Twitter" rel="noopener noreferrer" target="_blank" href="https://twitter.com/deanslistDAO"><svg width="16" height="16" viewBox="0 0 56.693 56.693" fill="currentColor"><path d="M52.837 15.065a20.11 20.11 0 0 1-5.805 1.591 10.125 10.125 0 0 0 4.444-5.592 20.232 20.232 0 0 1-6.418 2.454 10.093 10.093 0 0 0-7.377-3.192c-5.581 0-10.106 4.525-10.106 10.107 0 .791.089 1.562.262 2.303-8.4-.422-15.848-4.445-20.833-10.56a10.055 10.055 0 0 0-1.368 5.082c0 3.506 1.784 6.6 4.496 8.412a10.078 10.078 0 0 1-4.578-1.265l-.001.128c0 4.896 3.484 8.98 8.108 9.91a10.162 10.162 0 0 1-4.565.172c1.287 4.015 5.019 6.938 9.441 7.019a20.276 20.276 0 0 1-12.552 4.327c-.815 0-1.62-.048-2.411-.142a28.6 28.6 0 0 0 15.493 4.541c18.591 0 28.756-15.4 28.756-28.756 0-.438-.009-.875-.028-1.309a20.47 20.47 0 0 0 5.042-5.23z"></path></svg></a>
        <a aria-label="GitHub" rel="noopener noreferrer" target="_blank" href="https://github.com/Deans-List/"><svg width="16" height="16" viewBox="0 0 48 48" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.747 0 0 11.017 0 24.607c0 10.873 6.877 20.097 16.413 23.35 1.2.228 1.64-.533 1.64-1.183 0-.587-.023-2.525-.033-4.581-6.677 1.488-8.086-2.904-8.086-2.904-1.092-2.844-2.665-3.6-2.665-3.6-2.177-1.528.165-1.496.165-1.496 2.41.173 3.679 2.535 3.679 2.535 2.14 3.762 5.614 2.675 6.984 2.046.215-1.59.837-2.676 1.523-3.29-5.33-.623-10.934-2.733-10.934-12.162 0-2.686.937-4.882 2.473-6.605-.25-.62-1.071-3.123.232-6.512 0 0 2.016-.661 6.602 2.522 1.914-.545 3.968-.818 6.007-.828 2.04.01 4.095.283 6.013.828 4.58-3.183 6.593-2.522 6.593-2.522 1.306 3.39.484 5.892.235 6.512 1.54 1.723 2.47 3.919 2.47 6.605 0 9.452-5.614 11.533-10.959 12.142.861.764 1.628 2.261 1.628 4.557 0 3.292-.027 5.942-.027 6.753 0 .655.432 1.422 1.648 1.18C41.132 44.697 48 35.476 48 24.607 48 11.017 37.255 0 24 0Z"></path></svg></a>
       </div>
      </div>
      <div className="footc">© 2023 Dean&apos;s List Dao. All rights reserved.</div>
    </div>
   );
};

export default Footer;
