import Framework7 from 'framework7/lite-bundle';

// Import F7 Styles
import 'framework7/css/bundle';
import './style.css';

// Recuperar tema salvo ou usar preferência do sistema
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
if (savedDarkMode) {
  document.documentElement.classList.add('dark');
}

const app = new Framework7({
  el: '#app',
  name: 'Droid7 Core',
  theme: 'md',
  id: 'io.framework7.droid7core',
  darkMode: savedDarkMode, // Inicia com o tema salvo
  routes: [
    {
      path: '/about/',
      content: `
        <div class="page" data-name="about">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner sliding">
              <div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div>
              <div class="title">Sobre</div>
            </div>
          </div>
          <div class="page-content">
            <div class="block block-strong inset">
              <p>Este é um exemplo de página interna no Framework7 Core.</p>
            </div>
          </div>
        </div>
      `,
    },
    {
      path: '/settings/',
      content: `
        <div class="page" data-name="settings">
          <div class="navbar">
            <div class="navbar-bg"></div>
            <div class="navbar-inner sliding">
              <div class="left"><a href="#" class="link back"><i class="icon icon-back"></i></a></div>
              <div class="title">Configurações</div>
            </div>
          </div>
          <div class="page-content">
            <div class="block-title">Aparência</div>
            <div class="list strong inset dividers-ios">
              <ul>
                <li>
                  <div class="item-content">
                    <div class="item-inner">
                      <div class="item-title">Modo Escuro</div>
                      <div class="item-after">
                        <label class="toggle toggle-init color-blue">
                          <input type="checkbox" id="dark-mode-toggle" ${savedDarkMode ? 'checked' : ''}>
                          <span class="toggle-icon"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="block footer">
              Sua preferência será salva automaticamente.
            </div>
          </div>
        </div>
      `,
    },
  ],
});

// Lógica para persistência do tema
app.on('pageInit', (page) => {
  if (page.name === 'settings') {
    const toggle = document.querySelector('#dark-mode-toggle') as HTMLInputElement;
    if (toggle) {
      toggle.addEventListener('change', (e) => {
        const isDark = (e.target as HTMLInputElement).checked;
        if (isDark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('darkMode', 'true');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('darkMode', 'false');
        }
      });
    }
  }
});
