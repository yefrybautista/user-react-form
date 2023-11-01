interface BoxContentProps {
  children: React.ReactNode;
  title?: string;
}

export default function BoxContent({ children, title }: BoxContentProps) {
  return (
    <div className="box-content">
      {title ? <h1 className="title">{title}</h1> : null}
      <div className="box-content-body">{children}</div>
    </div>
  );
}
