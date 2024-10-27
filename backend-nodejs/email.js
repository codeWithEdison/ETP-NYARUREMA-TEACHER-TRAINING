const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'edsnkvn@gmail.com',
        pass: 'xqyd ehwh gwte tscn'
    }
});

mailOptions = {
    from: 'edsnkvn@gmail.com',
    to: 'edisonuwihanganye@gmail.com',
    subject: 'Your Exclusive Invitation - ETP Training Session',
    html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ETP Training Session Invitation</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #ffffff 0%, #f1f5ff 100%);
        }
        .header {
            background: linear-gradient(135deg, #0052cc 0%, #1a75ff 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
            border-radius: 0 0 30% 30%;
        }
        .content {
            padding: 30px;
            color: #2c3e50;
        }
        .highlight-box {
            background-color: #ffffff;
            border-left: 4px solid #0052cc;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 10px 10px 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .session-details {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .button {
            display: inline-block;
            padding: 15px 35px;
            background: linear-gradient(135deg, #0052cc 0%, #1a75ff 100%);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            margin: 20px 0;
            transition: transform 0.3s ease;
        }
        .button:hover {
            transform: translateY(-2px);
        }
        .footer {
            background: #0052cc;
            color: white;
            text-align: center;
            padding: 20px;
            border-radius: 30% 30% 0 0;
        }
        .icon-box {
            display: flex;
            justify-content: space-around;
            margin: 30px 0;
        }
        .feature {
            text-align: center;
            padding: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <!-- Decorative Header SVG -->
            <svg width="150" height="150" viewBox="0 0 200 200">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.9" />
                        <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.4" />
                    </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="90" fill="url(#grad1)" opacity="0.8"/>
                <text x="100" y="90" font-size="45" fill="white" text-anchor="middle" font-weight="bold">ETP</text>
                <text x="100" y="130" font-size="20" fill="white" text-anchor="middle">TRAINING</text>
            </svg>
            <h1 style="margin-top: 20px;">You're Invited!</h1>
            <p style="font-size: 1.2em;">Join Our Exclusive Training Session</p>
        </div>

        <div class="content">
            <div class="highlight-box">
                <h2 style="color: #0052cc; margin-top: 0;">Dear Edison,</h2>
                <p>We're thrilled to invite you to our upcoming training session where we'll explore cutting-edge technologies and innovative solutions.</p>
            </div>

            <div class="icon-box">
                <!-- Feature Icons -->
                <div class="feature">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <circle cx="30" cy="30" r="25" fill="#0052cc" opacity="0.1"/>
                        <path d="M20,30 L27,37 L40,24" stroke="#0052cc" stroke-width="3" fill="none"/>
                    </svg>
                    <p>Expert-Led</p>
                </div>
                <div class="feature">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <circle cx="30" cy="30" r="25" fill="#0052cc" opacity="0.1"/>
                        <rect x="20" y="20" width="20" height="20" fill="none" stroke="#0052cc" stroke-width="3"/>
                        <line x1="25" y1="30" x2="35" y2="30" stroke="#0052cc" stroke-width="3"/>
                    </svg>
                    <p>Interactive</p>
                </div>
                <div class="feature">
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <circle cx="30" cy="30" r="25" fill="#0052cc" opacity="0.1"/>
                        <path d="M30,20 L40,30 L30,40 L20,30 Z" fill="none" stroke="#0052cc" stroke-width="3"/>
                    </svg>
                    <p>Hands-on</p>
                </div>
            </div>

            <div class="session-details">
                <h3 style="color: #0052cc; margin-top: 0;">Session Details</h3>
                <!-- Calendar Icon -->
                <svg width="200" height="100" viewBox="0 0 200 100" style="display: block; margin: 20px auto;">
                    <rect x="40" y="20" width="120" height="60" fill="#0052cc" opacity="0.1" rx="5"/>
                    <rect x="50" y="35" width="100" height="35" fill="white" stroke="#0052cc" stroke-width="2"/>
                    <rect x="50" y="20" width="100" height="15" fill="#0052cc" opacity="0.2"/>
                    <text x="100" y="55" text-anchor="middle" fill="#0052cc" font-size="14">Session Date</text>
                    <text x="100" y="75" text-anchor="middle" fill="#0052cc" font-size="12">9:00 AM - 4:00 PM</text>
                </svg>
                
                <ul style="list-style-type: none; padding: 0;">
                    <li>📅 <strong>Date:</strong> sunday 27/10/2024 7:30 am</li>
                    <li>🕒 <strong>Time:</strong> 7:30 am</li>
                    <li>📍 <strong>Location:</strong> ETP NYARUREMA</li>
                    <li>💻 <strong>Platform:</strong> www.etpnyarurema.com</li>
                </ul>
            </div>

            <div class="highlight-box">
                <h3 style="color: #0052cc; margin-top: 0;">What You'll Learn</h3>
                <ul>
                    <li>Advanced technical concepts and best practices</li>
                    <li>Hands-on experience with industry tools</li>
                    <li>Real-world problem-solving techniques</li>
                    <li>Networking opportunities with industry experts</li>
                </ul>
            </div>

            <center>
                <a href="#" class="button">
                    RSVP NOW
                </a>
            </center>

            <!-- Wave Design -->
            <svg width="100%" height="50" viewBox="0 0 500 50" preserveAspectRatio="none" style="margin-top: 30px;">
                <path d="M0,0 C150,40 350,0 500,20 L500,50 L0,50 Z" fill="#0052cc" opacity="0.1"/>
                <path d="M0,25 C150,45 350,25 500,45 L500,50 L0,50 Z" fill="#0052cc" opacity="0.2"/>
            </svg>
        </div>

        <div class="footer">
            <p>Have questions? Contact us!</p>
            <p>📧 support@etptraining.com | 📞 [Your Phone Number]</p>
            <small>© 2024 ETP Training. All rights reserved.</small>
        </div>
    </div>
</body>
</html>
    `
};
transporter.sendMail(mailOptions, function(err, info){
if(err){
    console.log(err);
    
}else{
    console.log('EMAIL SENT TO : ', info.response);
    
}

})