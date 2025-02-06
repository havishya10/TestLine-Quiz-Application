export function theme(themeState) {
  if (themeState) {
    document.body.classList.toggle("bg-sky-50");
    document.body.classList.toggle("bg-slate-950");
    document.getElementById("nav").classList.add("bg-white");
    document.getElementById("nav").classList.remove("bg-zinc-950");
    document.querySelector("#nav > * ").classList.toggle("whiteTheme");
  } else {
    document.body.classList.toggle("bg-slate-950");
    document.body.classList.toggle("bg-sky-50");
    document.getElementById("nav").classList.add("bg-zinc-950");
    document.getElementById("nav").classList.remove("bg-white");
    document.querySelector("#nav > * ").classList.toggle("whiteTheme");
  }
}
