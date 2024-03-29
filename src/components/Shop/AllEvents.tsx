import Loader from '../Layout/Loader';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { deleteEvent } from '../../redux/actions/event';
import { AiOutlineDelete, AiOutlineEye } from 'react-icons/ai';

interface AllEventsProps {
    dispatch: any,
    getAllEventsShop: any
}

const AllEvents: React.FC<AllEventsProps> = ({ dispatch, getAllEventsShop }) => {
    const { events, isLoading } = useSelector((state: any) => state.events)
    const { seller } = useSelector((state: any) => state.seller)

    useEffect(() => {
        dispatch(getAllEventsShop(seller._id))
    }, [dispatch]);

    const handleDelete = (id: any) => {
        dispatch(deleteEvent(id))
        window.location.reload()
    }

    const columns = [
        { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
        {
            field: "name",
            headerName: "Name",
            minWidth: 180,
            flex: 1.4,
        },
        {
            field: "price",
            headerName: "Price",
            minWidth: 100,
            flex: 0.6,
        },
        {
            field: "Stock",
            headerName: "Stock",
            type: "number",
            minWidth: 80,
            flex: 0.5,
        },

        {
            field: "sold",
            headerName: "Sold out",
            type: "number",
            minWidth: 130,
            flex: 0.6,
        },
        {
            field: "Preview",
            flex: 0.8,
            minWidth: 100,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params: any) => {
                return (
                    <>
                        <Link to={`/product/${params.id}`}>
                            <Button>
                                <AiOutlineEye size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
        {
            field: "Delete",
            flex: 0.8,
            minWidth: 120,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params: any) => {
                return (
                    <>
                        <Button
                            onClick={() => handleDelete(params.id)}
                        >
                            <AiOutlineDelete size={20} />
                        </Button>
                    </>
                );
            },
        },
    ];

    const row: any[] = [];

    events &&
        events.forEach((item: any) => {
            row.push({
                id: item._id,
                name: item.name,
                price: "US$ " + item.discountPrice,
                Stock: item.stock,
                sold: item?.sold_out,
            });
        });

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="w-full mx-8 pt-1 mt-10 bg-white">
                    <DataGrid
                        rows={row}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                        autoHeight
                    />
                </div>
            )}
        </>
    );
};

export default AllEvents;