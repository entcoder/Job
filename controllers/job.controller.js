import Job from '../models/job.model.js';

export const saveJobData = async (req, res) => {
    try {
        const { title, company, location, description } = req.body;

        if (!title || !company || !location || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newJob = new Job({ title, company, location, description });

        await newJob.save();
        return res.status(200).json({ message: 'Job saved successfully' }); 
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getJobData = async (req, res) => {
    try {   
        const jobs = await Job.find({});
        
        return res.status(200).json(jobs);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: error.message });
    }
}
