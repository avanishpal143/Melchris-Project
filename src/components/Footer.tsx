export default function Footer() {
  return (
    <footer className="bg-friend-dark text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/melchrislogo.png"
              alt="Melchris Holdings"
              className="h-10 w-auto mb-6 opacity-90 px-1 py-2"
              style={{ maxWidth: '200px' }}
            />
            <p className="text-white/70 text-sm leading-relaxed">
              A real estate holding company focused on strategic ownership, governance, and long-term value creation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-white/70 text-sm leading-relaxed mb-2">
              1 North Johnston Ave., Suite A110
              <br />
              Hamilton, NJ 08609
            </p>
            <a
              href="mailto:Mark@melchrisholdings.com"
              className="text-dust-light hover:text-white text-sm transition-colors"
            >
              Mark@melchrisholdings.com
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Melchris Holdings operates as a parent entity overseeing real estate assets through
              disciplined governance and strategic planning.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} Melchris Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
