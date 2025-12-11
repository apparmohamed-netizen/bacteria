import { StudySection } from './types';

export const studyData: StudySection[] = [
  {
    id: "essential",
    title: "Essential Components",
    color: "bg-blue-100 border-blue-300 text-blue-900",
    content: [
      {
        title: "Core Structures",
        keywords: [
          "Nuclear-body",
          "Cytoplasm",
          "Cytoplasmic-membrane",
          "Cell-wall"
        ]
      }
    ]
  },
  {
    id: "cellwall",
    title: "Cell Wall",
    color: "bg-orange-100 border-orange-300 text-orange-900",
    content: [
      {
        title: "Composition & Properties",
        keywords: [
          "Peptidoglycan (Mucopeptide-polymer)",
          "Rigid",
          "Osmotically-insensitive"
        ]
      },
      {
        title: "Functions",
        keywords: [
          "Prevents-bursting (Osmotic-protection)",
          "Shape-maintenance",
          "Staining-affinity",
          "Antibiotic-target"
        ]
      },
      {
        title: "Role in Division",
        keywords: ["Septum-formation (Transverse-cell-wall)"]
      },
      {
        title: "Gram-Positive Structure",
        keywords: ["Thick-Peptidoglycan", "Techoic-acid"]
      },
      {
        title: "Gram-Negative Structure",
        keywords: [
          "Thin-Peptidoglycan",
          "Periplasmic-space (Gel-like)",
          "Outer-LPS (Endotoxin)"
        ]
      },
      {
        title: "LPS (Endotoxin)",
        keywords: [
          "Lipid-A (Inner/Toxic)",
          "Polysaccharide-core",
          "Somatic-(O)-antigen (Outer-Side-chains)"
        ]
      }
    ]
  },
  {
    id: "atypical",
    title: "Cell Wall Anomalies",
    color: "bg-red-100 border-red-300 text-red-900",
    content: [
      {
        title: "L-forms (Failure of synthesis)",
        keywords: [
          "Wall-less/Damaged",
          "Penicillin-induced (Inhibitor > Lysozyme)",
          "Revertible (When-inhibitor-removed)",
          "Replication-capable"
        ]
      },
      {
        title: "Mycoplasma",
        keywords: [
          "Naturally-wall-less (No-inducer)",
          "Irreversible (Never-revert)",
          "Pleomorphic (Variable-shapes)",
          "Replication-capable"
        ]
      }
    ]
  },
  {
    id: "membrane",
    title: "Cytoplasmic Membrane",
    color: "bg-green-100 border-green-300 text-green-900",
    content: [
      {
        title: "Definition",
        keywords: ["Semi-permeable/Delicate", "Interior-to-cell-wall"]
      },
      {
        title: "Functions",
        keywords: [
          "Selective-permeability (Osmotic-barrier)",
          "Active-transport",
          "Energy-production (Oxidative-phosphorylation)",
          "Biosynthesis (Cell-wall/Proteins)",
          "DNA-attachment-site"
        ]
      },
      {
        title: "Mesosomes",
        keywords: [
          "Convoluted-invaginations",
          "Increase-surface-area",
          "Respiratory-sites",
          "Chromosome-attachment"
        ]
      }
    ]
  },
  {
    id: "cytoplasm",
    title: "Cytoplasm & Internals",
    color: "bg-yellow-100 border-yellow-300 text-yellow-900",
    content: [
      {
        title: "Composition",
        keywords: ["RNA-rich (rRNA/tRNA)", "DNA-containing", "Food-granules"]
      },
      {
        title: "Ribosomes",
        keywords: [
          "60%-RNA / 40%-Protein",
          "Protein-synthesis-site",
          "Polyribosomes (Groups)"
        ]
      },
      {
        title: "Granules",
        keywords: [
          "Food-reserves",
          "Volutin/Metachromatic (Corynebacterium-diphtheriae)"
        ]
      },
      {
        title: "Nuclear Body (Nucleoid)",
        keywords: [
          "No-nuclear-membrane",
          "No-nucleoli",
          "Single-Circular Double-stranded-DNA"
        ]
      }
    ]
  },
  {
    id: "genetics",
    title: "Genetic Elements",
    color: "bg-purple-100 border-purple-300 text-purple-900",
    content: [
      {
        title: "Plasmids",
        keywords: [
          "Extra-chromosomal",
          "Double-stranded-DNA",
          "Dispensable",
          "Autonomous-replication",
          "Antibiotic-resistance",
          "Toxin-production"
        ]
      },
      {
        title: "Transposons",
        keywords: ["Jumping-genes", "Mobile-DNA-fragments"]
      }
    ]
  },
  {
    id: "external",
    title: "Optional External Structures",
    color: "bg-teal-100 border-teal-300 text-teal-900",
    content: [
      {
        title: "Flagella",
        keywords: [
          "Motility-organ",
          "Flagellin-protein",
          "H-Antigen",
          "Monotrichate/Amphitrichate/Lophotrichate/Peritrichate"
        ]
      },
      {
        title: "Fimbriae (Pili)",
        keywords: [
          "Short/Thin/Numerous",
          "Pilin-protein",
          "Attachment (Adhesion-organ)",
          "Sex Pili (Genetic-transfer)"
        ]
      },
      {
        title: "Capsule",
        keywords: [
          "Outermost-layer (Viscous)",
          "Anti-phagocytic (Virulence)",
          "Quellung-reaction (Swelling)",
          "Polysaccharide (Most)",
          "Polypeptide (B. anthracis)"
        ]
      },
      {
        title: "Biofilm",
        keywords: [
          "Structured-community",
          "Mucopolysaccharide-matrix",
          "Protective (Deep Isolation)",
          "Dental-caries (S. mutans)"
        ]
      }
    ]
  },
  {
    id: "spores",
    title: "Spores",
    color: "bg-slate-200 border-slate-400 text-slate-800",
    content: [
      {
        title: "Characteristics",
        keywords: [
          "Adverse-conditions (Trigger)",
          "Thick-protective-coat",
          "Calcium-dipicolinate",
          "Bacillus (Aerobic) / Clostridium (Anaerobic)"
        ]
      }
    ]
  }
];
