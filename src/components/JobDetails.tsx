"use client"

import { motion } from "framer-motion"
import type { Job } from "./mockJobs"
import ApplicationForm from "./ApplicationForm"

interface JobDetailProps {
  job: Job
  onApply: () => void
}

export default function JobDetail({ job, onApply }: JobDetailProps) {
  return (
    <motion.div className="p-6 space-y-6 text-white">
      
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {job.title ? job.title : job.title}
      </motion.h1>

      <div className="space-y-2">
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        {job.company && (
          <p>
            <strong>Interview:</strong> {job.company}
          </p>
        )}
      </div>

      <motion.div
        className="my-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
        <p>{job.description}</p>
      </motion.div>

      {job.requirements && job.requirements.length > 0 && (
        <motion.div
          className="my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Duties and Responsibilities</h2>
          <ul className="list-disc ml-5">
            {job.requirements.map((duty, index) => (
              <li key={index}>{duty}</li>
            ))}
          </ul>
        </motion.div>
      )}

      
      <ApplicationForm job={job} onSubmit={onApply} />
    </motion.div>
  )
}
