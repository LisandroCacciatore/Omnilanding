import { convergence } from '../../data/home.js';
import SectionLabel from '../../components/SectionLabel.jsx';

export default function ConvergenceMatrix() {
  return (
    <section className="mt-space-xl bg-surface-container-low rounded-lg p-space-lg md:p-space-xl border border-outline-variant/30">
      <div className="flex flex-col gap-space-md">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-sm">
          <div>
            <SectionLabel accent="muted" className="block mb-space-xs">
              {convergence.label}
            </SectionLabel>
            <h4 className="font-headline-lg text-headline-lg text-on-surface">
              {convergence.title}
            </h4>
          </div>
          <span className="font-label-code text-label-code text-on-surface-variant">
            {convergence.sub}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-sm text-body-sm">
            <thead>
              <tr className="bg-surface-container-lowest font-label-technical text-label-technical text-on-surface-variant border-b border-outline-variant/30">
                <th className="p-space-md">{convergence.columns[0].toUpperCase()}</th>
                <th className="p-space-md text-primary">{convergence.columns[1].toUpperCase()}</th>
                <th className="p-space-md text-secondary">{convergence.columns[2].toUpperCase()}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20 text-on-surface">
              {convergence.rows.map((r, i) => (
                <tr
                  key={r.dimension}
                  className={`${i % 2 === 0 ? 'bg-surface-container' : 'bg-surface-container-lowest'} hover:bg-surface-container-high transition-colors`}
                >
                  <td className="p-space-md font-label-code text-label-code text-outline">
                    {r.dimension.toUpperCase()}
                  </td>
                  <td className="p-space-md">{r.qa}</td>
                  <td className="p-space-md">{r.sport}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}