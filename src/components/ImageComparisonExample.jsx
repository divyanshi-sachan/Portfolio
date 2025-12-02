import { motion } from "framer-motion";
import ImageComparison from "./ImageComparison";

/**
 * Example usage of ImageComparison component in Case Studies
 * 
 * This demonstrates how to integrate the image comparison component
 * into your case studies to show before/after results, model improvements,
 * or UI transformations.
 */
const ImageComparisonExample = () => {
  return (
    <section className="section-padding bg-[#cfcfd0] text-black">
      <div className="container-width">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-gray-600 mb-4">
            Model Performance
          </p>
          <h3 className="heading-3 mb-6">Before vs After Optimization</h3>
          <p className="body-text text-gray-700 max-w-3xl">
            Compare the visual results of our model improvements. Drag the slider to see the transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ImageComparison
            beforeImage="/assets/project1.png"
            afterImage="/assets/project2.png"
            beforeLabel="Baseline Model"
            afterLabel="Optimized Model"
            containerClassName="max-w-4xl mx-auto"
          />
        </motion.div>

        {/* Additional context */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/60 rounded-2xl border border-black/10 p-6">
            <h4 className="font-medium uppercase tracking-wide text-sm text-gray-600 mb-2">
              Before
            </h4>
            <p className="body-small text-gray-700">
              Initial model performance with 78% accuracy and noticeable artifacts in edge cases.
            </p>
          </div>
          <div className="bg-white/60 rounded-2xl border border-black/10 p-6">
            <h4 className="font-medium uppercase tracking-wide text-sm text-gray-600 mb-2">
              After
            </h4>
            <p className="body-small text-gray-700">
              Optimized model achieving 92% accuracy with improved edge case handling and reduced inference time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageComparisonExample;

