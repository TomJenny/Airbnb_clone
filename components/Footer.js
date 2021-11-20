const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-10 md:px-32 py-14 text-gray-600 bg-gray-100">
        <div className="space-y-4 text-xs text-gray-800 border-t p-2">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb Works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 border-t p-2">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>its a pretty awwesome clon</p>
          <p>referrals accepted</p>
          <p>airbnb.org</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 border-t p-2">
          <h5 className="font-bold">HOST</h5>
          <p>host an online experience</p>
          <p>host your home</p>
          <p>resource center</p>
          <p>react-next.js</p>
          <p>papafam</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800 border-t p-2">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Center</p>
          <p>Trust & Safety</p>
          <p>our covid-19 response</p>
          <p>help center</p>
          <p>neighbour hood support </p>
        </div>
      </div>
      <div className="text-center border-t bg-gray-100 p-4">
        <a
          href="https://portfolio-react-swart.vercel.app"
          rel="noreferrer"
          target="_blank"
        >
          2021
        </a>
      </div>
    </div>
  );
};

export default Footer;
