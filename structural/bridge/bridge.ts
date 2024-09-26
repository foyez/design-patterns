// Here we have the WebPage hierarchy
interface WebPage {
  getContent(): string;
}

class About implements WebPage {
  protected theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent(): string {
    return "About page in " + this.theme.getColor();
  }
}

class Careers implements WebPage {
  protected theme: Theme;

  constructor(theme: Theme) {
    this.theme = theme;
  }

  getContent(): string {
    return "Careers page in " + this.theme.getColor();
  }
}

// And the separate theme hierarchy
interface Theme {
  getColor(): string;
}

class DarkTheme implements Theme {
  getColor(): string {
    return "Dark Black";
  }
}

class LightTheme implements Theme {
  getColor(): string {
    return "Off White";
  }
}

class AquaTheme implements Theme {
  getColor(): string {
    return "Light Blue";
  }
}

const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent()); // "About page in Dark Black"
console.log(careers.getContent()); // "Careers page in Dark Black"
