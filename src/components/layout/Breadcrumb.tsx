import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const labelMap: Record<string, string> = {
  dashboard: "Dashboard",
  inovasi: "Inovasi",
  tambah: "Tambah Inovasi",
  detail: "Detail Inovasi",
};

export function Breadcrumb() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex flex-wrap items-center gap-1.5 px-3 text-xs text-gray-500 sm:px-6 sm:text-sm">
      <Link to="/dashboard" className="hover:text-blue-600">
        Home
      </Link>
      {segments.map((seg, i) => {
        const path = "/" + segments.slice(0, i + 1).join("/");
        const isLast = i === segments.length - 1;
        const label = labelMap[seg] ?? seg;

        return (
          <span key={path} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5" />
            {isLast ? (
              <span className="font-medium text-gray-800">{label}</span>
            ) : (
              <Link to={path} className="hover:text-blue-600">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
