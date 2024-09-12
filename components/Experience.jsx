import React, { useState } from 'react';
import './Experience.css'; // Import the CSS file for styling

function Experience() {
  const [activeExperience, setActiveExperience] = useState(null);

  const experiences = [
    {
      company: "Proceedit - Intern",
      timeline: "Feb 2024 - June 2024",
      details: `
        <b>Project 1: Reinforcement Learning Model for Financial Asset Prediction</b><br/>
        <b>Project Overview:</b><br/>
        - Developed and evaluated a reinforcement learning model for financial asset prediction and trading.<br/><br/>

        <b>Stack Used:</b><br/>
        - Programming Language: Python<br/>
        - Libraries:<br/>
          - Pandas: For data manipulation and analysis.<br/>
          - NumPy: For numerical operations and array handling.<br/>
          - Psycopg2: PostgreSQL database adapter for Python.<br/>
          - Scikit-Learn: For preprocessing, scaling, and evaluation.<br/>
          - Stable Baselines3: For reinforcement learning model training.<br/>
          - Gym: For developing and comparing reinforcement learning algorithms.<br/>
          - Matplotlib: For data visualization.<br/><br/>

        <b>Purpose:</b><br/>
        - To create and test a reinforcement learning model that predicts asset prices and makes trading decisions.<br/>
        - Aimed to maximize trading rewards while managing transaction costs and holding penalties.<br/><br/>

        <b>Features:</b><br/>
        - Data Extraction:<br/>
          - Retrieved financial data from PostgreSQL.<br/>
          - Included indicators like 'DCP', 'DNCP', 'OPCP', etc.<br/><br/>
        - Feature Engineering:<br/>
          - Calculated percentage changes in prices to create target labels.<br/>
          - Scaled features for machine learning models.<br/><br/>
        - Reinforcement Learning Environment:<br/>
          - Created a custom Gym environment for trading actions (buy, sell, hold).<br/>
          - Tracked balance, holdings, and asset prices.<br/><br/>
        - Model Training:<br/>
          - Used Stable Baselines3’s PPO for training.<br/>
          - Evaluated using rewards accumulated over episodes.<br/><br/>
        - Evaluation:<br/>
          - Assessed success rates and average rewards.<br/>
          - Generated plots for episode rewards, success rates, and price ratios.<br/><br/>

        <b>Results:</b><br/>
        - Training and Validation:<br/>
          - PPO model trained and validated within the custom environment.<br/>
          - Evaluated model effectiveness in predicting and trading.<br/><br/>
        - Visualization:<br/>
          - Plots illustrated episode rewards, success rates, price ratios, and average rewards.<br/><br/>

        <b>Complexity:</b><br/>
        - Involved data extraction, feature engineering, and reinforcement learning model training.<br/>
        - Required advanced evaluation and visualization techniques.<br/><br/>

        <b>Impact:</b><br/>
        - Enhanced trading strategies through informed decision-making.<br/>
        - Automated trading strategies for efficiency and potential profitability.<br/>
        - Provided insights for further improvements.<br/><br/>

        <b>Backend:</b><br/>
        - Database: PostgreSQL.<br/>
        - Data Processing: Python with Pandas and NumPy.<br/>
        - Machine Learning: Scikit-Learn and Stable Baselines3.<br/>
        - Visualization: Matplotlib.<br/><br/>

        <b>Project 2: Probability Forecast Network</b><br/>
        <b>Project Overview:</b><br/>
        - Developed a probability forecast network to predict time series data with Bayesian inference.<br/>
        - Implemented a neural network with custom probabilistic layers to forecast and quantify prediction uncertainty.<br/><br/>

        <b>Stack Used:</b><br/>
        - Programming Language: Python<br/>
        - Libraries:<br/>
          - TensorFlow: For building and training the neural network model.<br/>
          - TensorFlow Probability: For probabilistic layers and Bayesian inference.<br/>
          - Scikit-Learn: For data preprocessing and normalization.<br/>
          - NumPy: For numerical operations and data manipulation.<br/>
          - SciPy: For statistical functions.<br/>
          - Matplotlib: For visualization.<br/><br/>

        <b>Backend Used:</b><br/>
        - Framework: TensorFlow and TensorFlow Probability<br/>
        - Data Processing: NumPy and Scikit-Learn<br/>
        - Statistical Analysis: SciPy<br/><br/>

        <b>How It Works:</b><br/>
        - Data Generation:<br/>
          - Generated synthetic time series data with patterns like trend, seasonal, noise, and abrupt changes.<br/>
          - Used this data for training and validating the model.<br/><br/>
        - Data Preprocessing:<br/>
          - Normalized features and target variables using MinMaxScaler from Scikit-Learn.<br/>
          - Reshaped data to fit the model requirements.<br/><br/>
        - Model Definition:<br/>
          - Created a custom DenseVariational layer using TensorFlow Probability for probabilistic modeling.<br/>
          - Defined a Sequential model with DenseVariational, Dropout, and Dense layers.<br/>
          - Implemented a custom loss function (ELBO) to optimize the model.<br/><br/>
        - Training:<br/>
          - Trained the model using Nadam optimizer with learning rate scheduling.<br/>
          - Used early stopping to prevent overfitting.<br/><br/>
        - Prediction and Evaluation:<br/>
          - Predicted on the validation set and calculated Bayesian inference bounds.<br/>
          - Evaluated using log-likelihood and residuals.<br/><br/>
        - Visualization:<br/>
          - Plotted actual vs predicted values with uncertainty bounds.<br/>
          - Simulated trading strategies and visualized performance.<br/>
          - Displayed residuals for each time step to analyze prediction accuracy.<br/><br/>

        <b>Complexity:</b><br/>
        - Model Complexity: Involves custom probabilistic layers for Bayesian inference, requiring advanced understanding of TensorFlow Probability and probabilistic modeling.<br/>
        - Data Handling: Requires handling and preprocessing time series data with various patterns.<br/>
        - Evaluation Metrics: Includes complex metrics like Bayesian inference bounds and log-likelihood.<br/><br/>

        <b>Visualization:</b><br/>
        - Plots comparing actual vs predicted values with uncertainty bounds.<br/>
        - Trading strategy performance visualization showing buy/sell signals and portfolio value.<br/>
        - Residual plots for analyzing prediction errors over time.<br/><br/>

        <b>Tools Used:</b><br/>
        - Development Environment: Python<br/>
        - Libraries: TensorFlow, TensorFlow Probability, Scikit-Learn, NumPy, SciPy, Matplotlib<br/><br/>

        <b>Language Used:</b><br/>
        - Python
      `,
    },
    {
      company: "Solar Secure Solutions - Data Scientist",
      timeline: "Dec 2023 - Feb 2024",
      details: `
        • Interned on machine learning projects.<br/>
        • Focused on data cleaning and solution verification through graphs.
      `,
    },
    {
      company: "Cyber Cell, Kochi, Kerala - Intern",
      timeline: "Jan 2023 - Feb 2023",
      details: `
        • Learned about cyber forensics and digital evidence recovery.<br/>
        • Worked on risk mitigation, IP tracking, and data duplication using Tableau.
      `,
    },
    {
      company: "Virtually Testing Foundation, USA - Cyber Security Engineer",
      timeline: "May 2022 - July 2022",
      details: `
        • Learned fundamentals of cyber security.<br/>
        • Conducted research, attended meetings, and excelled in TryHackMe challenges.
      `,
    }
  ];

  const handleExperienceClick = (index) => {
    setActiveExperience(activeExperience === index ? null : index);
  };

  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <ul>
  {experiences.map((exp, index) => (
    <li 
      id={index === 0 ? 'proceedit-project' : index === 1 ? 'solar-project' : null} // Assign ids to specific experiences
      key={index} 
      className={`experience-square ${activeExperience === index ? 'active' : ''}`} 
      onClick={() => handleExperienceClick(index)}
    >
      <div className="experience-header">
        <h3>{exp.company}</h3>
        <div className="timeline">{exp.timeline}</div>
      </div>
      {activeExperience === index && (
        <div className="experience-details" dangerouslySetInnerHTML={{ __html: exp.details }} />
      )}
    </li>
  ))}
</ul>

    </section>
  );
}

export default Experience;
