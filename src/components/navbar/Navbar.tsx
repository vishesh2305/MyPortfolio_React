import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

function Navbar() {

  return (
    <div className="my-4 h-15 bg-transparent px-10">
      <div className="rounded-2xl shadow-accent h-full w-full flex items-center justify-evenly">
        <InteractiveHoverButton onClick={() => window.open('https://www.linkedin.com/in/onlyvishesh/', "_blank")}>
          About Me
        </InteractiveHoverButton>
        <InteractiveHoverButton onClick={() => window.location.href = "mailto:visheshvasu2305@gmail.com"}>
          Contact Me
        </InteractiveHoverButton>
        <InteractiveHoverButton onClick={() => window.open('https://github.com/vishesh2305', "_blank")}>
          Projects
        </InteractiveHoverButton>
      </div>
    </div>
  );
}

export default Navbar;
