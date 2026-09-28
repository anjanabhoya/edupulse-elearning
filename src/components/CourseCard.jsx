import { Star, Clock, BookOpen, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";

export default function CourseCard({ course, onToggleEnroll, isEnrolled }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500/10 transition-all flex flex-col justify-between">
      <div>
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-44 object-cover"
        />
        <div className="p-5">
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-700/50">
            {course.category}
          </span>

          <h3 className="font-bold text-lg text-white mt-3 leading-snug line-clamp-2">
            {course.title}
          </h3>

          <p className="text-xs text-slate-400 mt-1">Instructor: {course.instructor}</p>

          <p className="text-slate-300 text-sm mt-3 line-clamp-2">
            {course.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-slate-400 mt-4 border-t border-slate-700/50 pt-3">
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-amber-400" />
              <span className="font-semibold text-slate-200">{course.rating}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              {course.lectures} lectures
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <button
          onClick={() => onToggleEnroll(course)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition cursor-pointer ${
            isEnrolled
              ? isHovered
                ? "bg-rose-900/40 text-rose-300 border border-rose-500/50"
                : "bg-emerald-900/30 text-emerald-300 border border-emerald-500/40"
              : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30"
          }`}
        >
          {isEnrolled ? (
            isHovered ? (
              <>
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>Drop Course</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Enrolled</span>
              </>
            )
          ) : (
            "Enroll Now"
          )}
        </button>
      </div>
    </div>
  );
}