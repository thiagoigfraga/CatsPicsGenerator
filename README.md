# CatPicsGenerator

CatPicsGenerator is a simple web application that fetches random cat pictures from an API and displays them in a grid layout. Users can click on any cat picture to open it in a modal, viewing a larger version centered on the screen. Clicking outside the modal closes the image.

## Features

- Fetches random cat images from [thecatapi.com](https://thecatapi.com/)
- Displays images in a responsive grid layout
- Modal view for enlarged image display with click-to-close functionality
- Simple and clean design using Astro, React, and custom CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/CatPicsGenerator.git
   cd CatPicsGenerator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000` (or the port specified in the terminal) to view the app.

## Project Structure

- **src/components/CatPics.jsx**: Main component that fetches and displays cat images.
- **src/assets/styles/global.css**: Global CSS styles for the application including modal and grid styling.
- **src/pages/index.astro**: Entry point of the application integrating the components within the Astro layout.

## Usage

- Click the **Fetch CatPics** button to load a new set of cat pictures.
- Click on any image to open it in a modal.
- Click outside the modal image to close the modal and return to the grid view.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you'd like to contribute.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [The Cat API](https://thecatapi.com/) for providing random cat images.