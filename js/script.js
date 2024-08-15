import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

mermaid.initialize({ startOnLoad: true });

async function loadDiagram(id, url) {
    try {
        const response = await fetch(url);
        const diagram = await response.text();
        const container = document.getElementById(id);
        
        if (container) {
            container.innerHTML = `<div class="mermaid">${diagram}</div>`;
            mermaid.init();
        } else {
            console.error(`Element with ID ${id} not found.`);
        }
    } catch (error) {
        console.error('Error loading diagram:', error);
    }
}

async function loadAllDiagrams() {
    await loadDiagram('diagram1', 'diagrams/diagram1.mmd');
    // await loadDiagram('diagram2', 'diagrams/diagram2.mmd');
    mermaid.init();
}

loadAllDiagrams();
