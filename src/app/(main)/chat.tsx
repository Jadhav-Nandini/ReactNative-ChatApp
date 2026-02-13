import ChatHeader from "@/src/components/atoms/ChatHeader";
import imagePath from "@/src/constants/imagePath";
import colors from "@/src/styles/colors";
import Chat from "@codsod/react-native-chat";
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {
    const [messages, setMessages] = useState<any>([
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },

        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
        {
            _id: 1,
            text: "Hello",
            createdAt: new Date(),
            user: {
                _id: 2,
                name: "Jhon Doe"
            }
        },
    ]);

    const onSendMessage = (text: string) => {
        const message = {
            _id: messages.length + 1,
            text,
            createdAt: new Date(),
            user: {
                _id: 1,
                name: "Elon musk"
            }
        }
        setMessages((prevMessages: any) => [message, ...prevMessages]);
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ChatHeader />
            <Chat
                messages={messages}
                themeColor={colors.primary}
                themeTextColor={colors.white}
                showSenderAvatar={false}
                showReceiverAvatar={false}
                placeholder="Type a message..."
                inputBorderColor={colors.primary}
                backgroundColor={colors.lightGray}
                placeholderColor={colors.lightGray}
                backgroundImage={imagePath.chatBG}
                showEmoji={true}
                onPressEmoji={() => alert("In progress")}
                showAttachment={true}
                onPressAttachment={() => alert("Coming Soon")}
                setMessages={(val) => onSendMessage(val)}
                user={{
                    _id: 1,
                    name: "Elon musk"
                }}
                onEndReached={() => alert("You have reached the end of the page")}

            />
        </SafeAreaView>
    )
}

export default ChatScreen
