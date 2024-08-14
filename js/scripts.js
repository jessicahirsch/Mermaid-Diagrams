// Import MermaidJS
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

// Initialize MermaidJS
mermaid.initialize({ startOnLoad: true });

// Function to dynamically load a Mermaid diagram from a .mmd file
async function loadDiagram(id, url) {
    try {
        const response = await fetch(url);
        const diagram = await response.text();
        document.getElementById(id).innerHTML = `<div class="mermaid">${diagram}</div>`;
        mermaid.init();
    } catch (error) {
        console.error('Error loading diagram:', error);
    }
}

loadDiagram('diagram1', 'diagrams/diagram1.mmd');
// loadDiagram('diagram2', 'diagrams/diagram2.mmd');
