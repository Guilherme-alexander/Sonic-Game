# <img src="styleSheet/Life.png"> Sonic Runner (Web Game)

Um mini game estilo **dinossauro do Google Chrome**, desenvolvido com **HTML, CSS e JavaScript puro**.

O jogador controla o Sonic, desviando de obstáculos (espinhos) enquanto acumula pontos. O objetivo é sobreviver o máximo possível.

---

## 🚀 Demonstração

* Clique na tela ou pressione **ESPAÇO** para pular
* Evite colidir com os obstáculos
* A pontuação aumenta automaticamente com o tempo

---

## 🕹️ Controles

| Ação      | Tecla / Input        |
| --------- | -------------------- |
| Pular     | `Espaço` ou `Clique` |
| Reiniciar | Botão "Start Game"   |

---

## 🧠 Funcionalidades

* ✅ Sistema de colisão real (AABB - bounding box)
* ✅ Animação de pulo
* ✅ Sistema de pontuação em tempo real
* ✅ Tela de Game Over
* ✅ Botão de reinício
* ✅ Modo debug com hitbox visual
* ✅ Loop de jogo contínuo

---

## 🧪 Modo Debug

O jogo possui um modo debug ativado por padrão:

* Mostra as **hitboxes** (caixas de colisão) em vermelho
* Útil para ajustar colisões e entender o comportamento do jogo

Para desativar:

```js
let debug = false;
```

---

## 📁 Estrutura do Projeto

```
📦 projeto
 ┣ 📂 css
 ┃ ┗ 📜 style.css
 ┣ 📂 js
 ┃ ┗ 📜 script.js
 ┣ 📂 styleSheet
 ┃ ┗ (imagens do jogo)
 ┗ 📜 index.html
```

---

## ⚙️ Tecnologias Utilizadas

* HTML5
* CSS3 (animações com keyframes)
* JavaScript (DOM + Game Loop)

---

## 🧩 Lógica do Jogo

### 🔁 Loop Principal

O jogo roda com um `setInterval` que:

* Atualiza pontuação
* Detecta colisão
* Atualiza debug

---

### 💥 Sistema de Colisão

Utiliza colisão baseada em retângulos:

```js
const colisao =
    espinhoRect.left < sonicRect.right &&
    espinhoRect.right > sonicRect.left &&
    espinhoRect.top < sonicRect.bottom &&
    espinhoRect.bottom > sonicRect.top;
```

---

### 🦘 Sistema de Pulo

* Baseado em **CSS animation**
* Classe `jump` aplicada dinamicamente via JS
* Duração: 500ms

---

## 🔧 Melhorias Futuras

* 🔥 Física real (gravidade)
* ⚡ Velocidade progressiva
* 🎯 Spawn aleatório de obstáculos
* ❤️ Sistema de vidas
* 🔊 Sons e efeitos
* 📱 Suporte mobile completo
* 🧠 Inteligência de dificuldade

---

## 🐛 Problemas Conhecidos

* Pulo baseado em animação (não física real)
* Velocidade fixa dos obstáculos
* Dependência de resolução (não totalmente responsivo)

---

## 👨‍💻 Autor

Projeto desenvolvido por **Guilherme Alexander**

---

## 📜 Licença

Este projeto é open-source e pode ser usado para fins de estudo e aprendizado.
