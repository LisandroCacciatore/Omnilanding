export default function Prose({ blocks }) {
  const output = [];
  let listBuffer = [];

  const flushList = (key) => {
    if (listBuffer.length) {
      output.push(
        <ul
          key={`ul-${key}`}
          className="my-6 space-y-2 list-disc pl-6 font-body-lg text-body-lg text-on-surface-variant"
        >
          {listBuffer.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
  };

  blocks.forEach((block, i) => {
    if (block.startsWith('- ')) {
      listBuffer.push(block.slice(2));
      return;
    }

    flushList(i);

    if (block.startsWith('## ')) {
      output.push(
        <h2
          key={i}
          className="font-headline-lg text-headline-lg text-primary font-normal tracking-tight mt-14 mb-5"
        >
          {block.slice(3)}
        </h2>
      );
      return;
    }

    const boldMatch = block.match(/^\*\*([^*]+)\*\*\s*(.*)$/);
    if (boldMatch) {
      output.push(
        <p
          key={i}
          className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6"
        >
          <strong className="text-primary font-medium">{boldMatch[1]}</strong>
          {boldMatch[2] ? ` ${boldMatch[2]}` : ''}
        </p>
      );
      return;
    }

    output.push(
      <p
        key={i}
        className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6"
      >
        {block}
      </p>
    );
  });

  flushList('final');

  return <div className="max-w-[720px]">{output}</div>;
}