import React from "react";
import Image from "next/image";
import { getProjects } from "@/lib/content";

export default async function ProjectsPage() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.category !== "other");
  const others = projects.filter((p) => p.category === "other");

  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[1200px] mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Our Projects and Initiatives
      </h1>

      {featured.map((project) => (
        <section key={project.slug} className="mb-16">
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {project.title}
            </h2>
            {project.summary && (
              <p className="text-base md:text-lg mb-4">{project.summary}</p>
            )}
            {project.content && (
              <div
                className="project-body text-base md:text-lg"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            )}
          </div>

          {project.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {project.images.map((src) => (
                <div
                  key={src}
                  className="w-full h-64 relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {others.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Other Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((project) => (
              <div
                key={project.slug}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                {project.summary && (
                  <p className="text-base mb-4">{project.summary}</p>
                )}
                <div className="w-full h-48 bg-gray-200 rounded-lg relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      {project.title}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
