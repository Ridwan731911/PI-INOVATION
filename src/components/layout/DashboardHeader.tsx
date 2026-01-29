import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, ChevronDown, LogOut, FileText, CheckCircle, AlertTriangle, Info, Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar-context";

const notifications = [
  {
    id: 1,
    icon: CheckCircle,
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
    title: "Inovasi Disetujui",
    message: "Project 'Smart Monitoring System' telah disetujui oleh VP.",
    time: "5 menit lalu",
    unread: true,
  },
  {
    id: 2,
    icon: FileText,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    title: "Inovasi Baru Ditambahkan",
    message: "Project 'AI Document Processor' berhasil ditambahkan.",
    time: "1 jam lalu",
    unread: true,
  },
  {
    id: 3,
    icon: AlertTriangle,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    title: "Deadline Mendekati",
    message: "Project 'Data Analytics Platform' deadline 3 hari lagi.",
    time: "2 jam lalu",
    unread: true,
  },
  {
    id: 4,
    icon: Info,
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50",
    title: "Update Status",
    message: "Project 'Cloud Migration' berpindah ke tahap Implementasi.",
    time: "1 hari lalu",
    unread: false,
  },
  {
    id: 5,
    icon: CheckCircle,
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
    title: "Review Selesai",
    message: "Review untuk 'Cybersecurity Enhancement' telah selesai.",
    time: "2 hari lalu",
    unread: false,
  },
];

export function DashboardHeader() {
  const navigate = useNavigate();
  const { toggleSidebar } = useSidebar();
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node))
        setProfileOpen(false);
      if (notifRef.current && !notifRef.current.contains(e.target as Node))
        setNotifOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="flex items-center justify-between gap-2 border-b bg-white px-3 py-3 sm:gap-4 sm:px-6">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={toggleSidebar}
        className="rounded-md p-2 text-gray-500 hover:bg-gray-100 md:hidden"
      >
        <Menu className="size-5" />
      </button>
      <div className="hidden md:block" />

      <div className="flex items-center gap-2 sm:gap-4">
      {/* Notification Bell */}
      <div ref={notifRef} className="relative">
        <button
          onClick={() => {
            setNotifOpen(!notifOpen);
            setProfileOpen(false);
          }}
          className="relative rounded-sm p-2 text-gray-500 hover:bg-gray-100"
        >
          <Bell className="size-5" />
          {unreadCount > 0 && (
            <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-sm bg-red-500 text-[10px] font-bold text-white">
              {unreadCount}
            </span>
          )}
        </button>

        {notifOpen && (
          <div className="absolute right-0 mt-2 w-[calc(100vw-2rem)] overflow-hidden rounded-sm border border-gray-200 bg-white shadow-xl sm:w-96">
            {/* Header */}
            <div className="flex items-center justify-between border-b bg-linear-to-r from-blue-700 to-indigo-600 px-5 py-3">
              <h3 className="text-sm font-semibold text-white">Notifikasi</h3>
              <span className="rounded-sm bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white">
                {unreadCount} baru
              </span>
            </div>

            {/* Notification List */}
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((notif) => {
                const Icon = notif.icon;
                return (
                  <div
                    key={notif.id}
                    className={`flex cursor-pointer gap-3 border-b border-gray-50 px-5 py-3.5 transition-colors hover:bg-gray-50 ${
                      notif.unread ? "bg-blue-50/40" : ""
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-sm ${notif.iconBg}`}
                    >
                      <Icon className={`size-4 ${notif.iconColor}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-gray-800">
                          {notif.title}
                        </p>
                        {notif.unread && (
                          <span className="size-2 rounded-sm bg-blue-500" />
                        )}
                      </div>
                      <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                        {notif.message}
                      </p>
                      <p className="mt-1 text-[11px] text-gray-400">
                        {notif.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t bg-gray-50 px-5 py-2.5 text-center">
              <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                Lihat Semua Notifikasi
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Profile Dropdown */}
      <div ref={profileRef} className="relative">
        <button
          onClick={() => {
            setProfileOpen(!profileOpen);
            setNotifOpen(false);
          }}
          className="flex items-center gap-3 rounded-lg px-2 py-1 hover:bg-gray-100"
        >
          <img
            src="https://ui-avatars.com/api/?name=Nama+Pegawai&background=6366f1&color=fff&rounded=true&size=36"
            alt="Avatar"
            className="size-9 rounded-sm"
          />
          <span className="hidden text-sm font-medium text-gray-700 sm:inline">Nama Pegawai</span>
          <ChevronDown className="hidden size-4 text-gray-400 sm:block" />
        </button>

        {profileOpen && (
          <div className="absolute right-0 mt-2 w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
            <button
              onClick={() => navigate("/login")}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <LogOut className="size-4" />
              Logout
            </button>
          </div>
        )}
      </div>
      </div>
    </header>
  );
}
