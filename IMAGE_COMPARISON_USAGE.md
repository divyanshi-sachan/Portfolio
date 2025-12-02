# Image Comparison Component Usage

The `ImageComparison` component is a styled, interactive before/after image slider that matches your portfolio's design system.

## Design System Integration

The component is styled to match your portfolio:
- **Background**: `bg-white/60` with `border-black/20` (matches case study cards)
- **Border radius**: `rounded-2xl` (consistent with other components)
- **Typography**: Uses your existing font system
- **Colors**: Black/white with opacity variations matching your palette
- **Animations**: Framer Motion with your standard transition patterns

## Basic Usage

```jsx
import ImageComparison from "./components/ImageComparison";

<ImageComparison
  beforeImage="/path/to/before.jpg"
  afterImage="/path/to/after.jpg"
  beforeLabel="Baseline"
  afterLabel="Optimized"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `beforeImage` | `string` | **required** | URL/path to the "before" image |
| `afterImage` | `string` | **required** | URL/path to the "after" image |
| `beforeLabel` | `string` | `"Before"` | Label for the before image |
| `afterLabel` | `string` | `"After"` | Label for the after image |
| `className` | `string` | `undefined` | Additional CSS classes |
| `containerClassName` | `string` | `undefined` | Additional classes for the container |

## Example: In Case Studies

```jsx
import { motion } from "framer-motion";
import ImageComparison from "../components/ImageComparison";

const CaseStudyDetail = ({ caseStudy }) => {
  return (
    <div className="section-padding bg-[#cfcfd0]">
      <div className="container-width">
        {/* Case study content */}
        
        {/* Image comparison section */}
        {caseStudy.beforeImage && caseStudy.afterImage && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImageComparison
              beforeImage={caseStudy.beforeImage}
              afterImage={caseStudy.afterImage}
              beforeLabel="Original Model"
              afterLabel="Fine-tuned Model"
              containerClassName="max-w-4xl mx-auto"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};
```

## Example: Model Performance Comparison

Perfect for showing AI/ML improvements:

```jsx
<ImageComparison
  beforeImage="/assets/model-baseline.png"
  afterImage="/assets/model-optimized.png"
  beforeLabel="Baseline (78% accuracy)"
  afterLabel="Optimized (92% accuracy)"
/>
```

## Example: UI/UX Transformations

Show design improvements:

```jsx
<ImageComparison
  beforeImage="/assets/ui-old.png"
  afterImage="/assets/ui-new.png"
  beforeLabel="Previous Design"
  afterLabel="Redesigned"
/>
```

## Styling Customization

The component uses your design tokens:
- Primary background: `#cfcfd0`
- Text: Black with gray variations
- Borders: `border-black/20` or `border-black/10`
- Rounded corners: `rounded-2xl`

To customize, pass additional classes via `containerClassName`:

```jsx
<ImageComparison
  beforeImage="..."
  afterImage="..."
  containerClassName="max-w-5xl mx-auto shadow-lg"
/>
```

## Integration with Case Studies Data

Update your `caseStudies` in `src/constants/index.js`:

```javascript
export const caseStudies = [
  {
    id: "vision-lab",
    title: "Vision Lab Classifier",
    // ... other fields
    beforeImage: "/assets/vision-before.png",
    afterImage: "/assets/vision-after.png",
    beforeLabel: "Manual Classification",
    afterLabel: "AI Classification",
  },
];
```

Then use it in your component:

```jsx
{caseStudy.beforeImage && (
  <ImageComparison
    beforeImage={caseStudy.beforeImage}
    afterImage={caseStudy.afterImage}
    beforeLabel={caseStudy.beforeLabel || "Before"}
    afterLabel={caseStudy.afterLabel || "After"}
  />
)}
```

## Features

- ✅ Drag-to-compare slider interaction
- ✅ Click-to-move support
- ✅ Responsive design
- ✅ Smooth animations (Framer Motion)
- ✅ Accessible labels
- ✅ Matches your portfolio design system
- ✅ Mobile-friendly touch support

## Notes

- Images should be the same dimensions for best results
- The component handles image loading automatically
- The slider position starts at 50% (center)
- Labels are positioned dynamically based on slider position

