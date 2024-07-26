

export default function BusinessHours() {
    const hours = [
        { day: 'Monday', open: '8:00 AM', close: '5:00 PM' },
        { day: 'Tuesday', open: '8:00 AM', close: '5:00 PM' },
        { day: 'Wednesday', open: '8:00 AM', close: '5:00 PM' },
        { day: 'Thursday', open: '8:00 AM', close: '5:00 PM' },
        { day: 'Friday', open: '8:00 AM', close: '5:00 PM' },
        { day: 'Saturday', open: '9:00 AM', close: '3:00 PM' },
        { day: 'Sunday', open: 'Closed', close: '' },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
            <ul className="space-y-2">
                {hours.map((hour, index) => (
                    <li key={index} className="flex justify-between">
                        <span className="font-medium">{hour.day}</span>
                        <span>
                            {hour.open} {hour.close && `- ${hour.close}`}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
    

