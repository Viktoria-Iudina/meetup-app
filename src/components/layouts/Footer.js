import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.columns}>
        <section>
          <h3>About the project</h3>
          <p>
            A non-profit React JS course project: browse meetups, add new ones
            and keep your favorites.
          </p>
        </section>

        <section>
          <h3>Built with</h3>
          <ul>
            <li>React JS</li>
            <li>React Router</li>
            <li>Context API</li>
            <li>CSS Modules</li>
          </ul>
        </section>

        <section>
          <h3>Project</h3>
          <ul>
            <li>
              <a
                href="https://github.com/Viktoria-Iudina/meetup-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repository
              </a>
            </li>
            <li>Hosted on Netlify</li>
            <li>Database: Firebase</li>
          </ul>
        </section>
      </div>

      <p className={classes.copy}>
        © {new Date().getFullYear()} Meetup App · Learning project
      </p>
    </footer>
  );
}

export default Footer;