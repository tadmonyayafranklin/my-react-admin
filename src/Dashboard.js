import React, { useEffect, useState } from 'react';
import { useDataProvider } from 'react-admin';
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import './bootstrap.css';

const API_URL = 'http://localhost:5000/posts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [userPostCount, setUserPostCount] = useState({});
    const [postCount, setPostCount] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);
    const dataProvider = useDataProvider();
    const [draftPostCount, setDraftPostCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(API_URL);
            const posts = response.data;

            // Fetch posts count
            const postResponse = await dataProvider.getList(
                './posts', 
                {pagination: {page: 1, perPage: 100}}
            );
            setPostCount(postResponse.total);

            // Count draft posts
            const draftPosts = postResponse.data.filter(post =>
                post.status === 'Draft'
            );
            setDraftPostCount(draftPosts.length);

            // Count posts per user
            const userCount = {};
            posts.forEach(post => {
                userCount[post.userId] = (userCount[post.userId] || 0) + 1;
            });
            setUserPostCount(userCount);


            // Set total users and posts
            setTotalUsers(new Set(posts.map(post => post.userId)).size);
            setTotalPosts(posts.length);

            setData(posts);
        };

        fetchData();
    }, [dataProvider]);

    // Prepare data for BarChart
    const barChartData = Object.entries(userPostCount).map(([userId, count]) => ({ userId, count }));

    // Prepare data for PieChart
    const pieData = [
        { id: 'Published', value: postCount },
        { id: 'Draft', value: draftPostCount },
    ];

    return (
        <div class="container" style={{padding: 3}}>
            <Typography variant='h2' mt={3}>Basic statistic</Typography>
            <div class="container">
                <div>
                    <Card class="main">
                        <CardContent class="content">
                            <h4>Total Users</h4>
                            <p>{totalUsers}</p>
                        </CardContent>
                
                        <CardContent>
                            <h4>Total Posts</h4>
                            <p>{totalPosts}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Typography variant='h2'>Posts per User</Typography>
            <div style={{ height: '400px' }}>
                <ResponsiveBar
                    data={barChartData}
                    keys={['count']}
                    indexBy="userId"
                    margin={{ top: 50, right: 130, bottom: 50, left: 130 }}
                    padding={0.3}
                    colors={{ scheme: 'spectral' }}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'User ID',
                        legendPosition: 'middle',
                        legendOffset: 32,
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Number of Posts',
                        legendPosition: 'middle',
                        legendOffset: -40,
                    }}
                    enableLabel={false}
                    tooltip={({ value }) => (
                        <strong>{value} posts</strong>
                    )}
                />
            </div>

            <Typography variant='h2'>Published vs Draft Posts</Typography>
            <div style={{ height: '400px'}}>
                <ResponsivePie
                    data={pieData}
                    margin={{ top: 50, right: 130, bottom: 50, left: 130 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'spectral' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    enableArcLinkLabels={true}
                    arcLinkLabel={(e) => `${e.id}: ${e.value}`}
                    arcLabel={(e) => `${e.value}`}
                    tooltip={({ id, value }) => (
                        <strong>{id}: {value} posts</strong>
                    )}
                />
            </div>
        </div>
    );
};

export default Dashboard;
